package main

import (
	"os"
	"path/filepath"

	"changeme/bootstrapper"
	"changeme/elevation"
)

type GreetService struct{}

func (g *GreetService) Greet(name string) string {
	return "Hello " + name + "!"
}

func (g *GreetService) IsAdmin() bool {
	return elevation.IsAdmin()
}

func (g *GreetService) Exit() {
	os.Exit(0)
}

func (g *GreetService) StartBootstrapper() {
	bootstrapper.Run(filepath.Join("/etc/scion-host/linuxx64/", "bootstrapper.toml"), "/etc/scion-host/linuxx64/")

}
