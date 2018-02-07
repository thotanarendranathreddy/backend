package main

import (
	"fmt"
)

type Salutation struct {
	Name     string
	Greeting string
}

func GreetMessage(name string, greeting ...string) (message string, alternate string) {

	fmt.Println(len(greeting))
	message = greeting[1]
	alternate = name
	return

}

type Printer func(string)

// instead of name less function func(string) or printer  bcz of type printer func(string)
func Greet(salutation Salutation, do Printer, isFormal bool) {
	check1, check2 := GreetMessage(salutation.Name, salutation.Greeting, "yoyoyo", "wafsdf", "adfadf")
	if prefix := GetPrefix(salutation.Name); isFormal {

		do(prefix + check1)
	} else {
		do(check2)
	}
}

func GetPrefix(name string) (prefix string) {

	switch name {
	case "Narendranath":
		prefix = "Mr"
	case "Alexmason":
		prefix = "Dr"
	case "CaptainPrice":
		prefix = "Sir"
	default:
		prefix = "Dude"
	}
	return
}
func Print(s string) {

	fmt.Print(s)
}

func PrintLine(s string) {

	fmt.Println(s)
}
func CustomPrint(custom string) Printer {

	return func(s string) {
		fmt.Println(custom + s + custom)
	}
}

func main() {

	var s = Salutation{"Alexmason", "Hello"}

	Greet(s, CustomPrint("!!!"), true)
}
