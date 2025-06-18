package main

import (
	"os"

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
