package elevation

import (
	"log"
	"os/user"
)

func IsAdmin() bool {
	currentUser, err := user.Current()
	if err != nil {
		log.Fatalf("Unable to get current user: %s", err)
	}
	return currentUser.Username == "root"
}
