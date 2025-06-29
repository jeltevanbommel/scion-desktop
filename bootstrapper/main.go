// Copyright 2020 Anapaya Systems
// Copyright 2021 ETH Zurich
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package bootstrapper

import (
	"changeme/bootstrapper/config"
	"flag"
	"fmt"
	"github.com/wailsapp/wails/v3/pkg/application"
	"os"

	log "github.com/inconshreveable/log15"
)

var (
	cfg config.Config
)

//func main() {
//	os.Exit(realMain())
//}

type InterceptHandler struct {
	next log.Handler
}

var App *application.App

func (h *InterceptHandler) Log(r *log.Record) error {
	App.EmitEvent("logevent", fmt.Sprintf("[%s], Msg: %s, Ctx: %v\n", r.Lvl, r.Msg,
		r.Ctx))

	if h.next != nil {
		return h.next.Log(r)
	}
	return nil
}
func Run(configFile string, scionFolder string) int {
	//config.AddFlags()

	cfg = config.Config{}
	if err := config.LoadConfigFile(&cfg, configFile); err != nil {
		_, _ = fmt.Fprintf(os.Stderr, "Unable to load config: %v\n", err)
		return 1
	}
	if config.IfaceName != "" {
		// override config file setting with command line flag value
		cfg.InterfaceName = config.IfaceName
	}
	cfg.InitDefaults()
	cfg.SciondConfigDir = scionFolder
	//
	//lvl, err := log.LvlFromString(cfg.Logging.Console.Level)
	//if err != nil {
	//	_, _ = fmt.Fprintf(os.Stderr, "fatal error: %v\n", err)
	//	return 1
	//}
	//
	baseHandler := log.Root().GetHandler()
	log.Root().SetHandler(&InterceptHandler{next: baseHandler})

	if err := cfg.Validate(); err != nil {
		log.Error("Unable to validate config", "err", err)
		App.EmitEvent("finish-bootstrapping", false)
		return 1
	}
	defer log.Info(fmt.Sprintf("=====================> Service stopped %s", "bootstrapper"))
	b, err := NewBootstrapper(&cfg)
	if err != nil {
		log.Error("Error creating bootstrapper", "err", err)
		App.EmitEvent("finish-bootstrapping", false)
		return 1
	}
	if err := b.tryBootstrapping(); err != nil {
		App.EmitEvent("finish-bootstrapping", false)
		log.Error("Bootstrapping failed", "err", err)
		return 1
	}
	App.EmitEvent("finish-bootstrapping", true)
	return 0
}

func realMain() int {
	config.AddFlags()
	flag.Parse()
	if v, ok := config.CheckFlags(&cfg); !ok {
		return v
	}
	if err := config.LoadFile(&cfg); err != nil {
		_, _ = fmt.Fprintf(os.Stderr, "Unable to load config: %v\n", err)
		return 1
	}
	if config.IfaceName != "" {
		// override config file setting with command line flag value
		cfg.InterfaceName = config.IfaceName
	}
	cfg.InitDefaults()
	lvl, err := log.LvlFromString(cfg.Logging.Console.Level)
	if err != nil {
		_, _ = fmt.Fprintf(os.Stderr, "fatal error: %v\n", err)
		return 1
	}
	log.Root().SetHandler(log.LvlFilterHandler(lvl, log.StreamHandler(os.Stdout, log.LogfmtFormat())))

	if err := cfg.Validate(); err != nil {
		log.Error("Unable to validate config", "err", err)
		return 1
	}
	defer log.Info(fmt.Sprintf("=====================> Service stopped %s", "bootstrapper"))
	b, err := NewBootstrapper(&cfg)
	if err != nil {
		log.Error("Error creating bootstrapper", "err", err)
		return 1
	}
	if err := b.tryBootstrapping(); err != nil {
		log.Error("Bootstrapping failed", "err", err)
		return 1
	}
	return 0
}
