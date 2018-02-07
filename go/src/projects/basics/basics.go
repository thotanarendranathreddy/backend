package main

import (
	"fmt"
)

type Salutation struct {
	Name     string
	Greeting string
}

type Renamable interface {
	Rename(newName string)
}

func (salutation *Salutation) Rename(newName string) {

	salutation.Name = newName

}
func GreetMessage(name string, greeting ...string) (message string, alternate string) {

	//fmt.Println(len(greeting))
	message = greeting[1]
	alternate = name
	return

}

type Printer func(string)

// instead of name less function func(string) or printer  bcz of type printer func(string)

type Salutations []Salutation

func (salutations Salutations) Greet(do Printer, isFormal bool, times int) {
	for _, s := range salutations {
		check1, check2 := GreetMessage(s.Name, s.Greeting, "yoyoyo", "wafsdf", "adfadf")

		//------ for i:0; i<times; i++ ------
		//for infinitre loop just remove i:0; i<times; i++
		//	i := 0
		//	for i < times {
		//		if i%2 == 0 {
		//			i++
		//			continue
		//		}
		//		if i == 3 {
		//			i++
		//			continue
		//		}
		if prefix := GetPrefix(s.Name); isFormal {

			do(prefix + check1 + check2)
		} else {
			do(check2)
		}
	}
	//i++
}

func (salutations Salutations) ChannelGreeter(c chan Salutation) {

	for _, s := range salutations {
		c <- s
	}
	close(c)
}
func GetPrefix(name string) string {

	//	var PrefixMap map[string]string
	//	PrefixMap = make(map[string]string)
	//	PrefixMap["Narendranath"] = "Mr"
	//	PrefixMap["Alexmason"] = "Dr"
	//	PrefixMap["CaptainPrice"] = "Sir"
	// --------or--------
	PrefixMap := map[string]string{
		"Narendranath Redy": "Mr",
		"Alexmason":         "Dr",
		"CaptainPrice":      "Sir",
	}
	//	switch name {
	//	case "Narendranath":
	//		prefix = "Mr"
	//	case "Alexmason":
	//		prefix = "Dr"
	//	case "CaptainPrice":
	//		prefix = "Sir"
	//	default:
	//		prefix = "Dude"
	//	}
	PrefixMap["Alexmason"] = "Sir"
	//delete(PrefixMap, "CaptainPrice")
	if value, exists := PrefixMap[name]; exists {
		return value
	}
	return "Duddghgde"
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

func RenameToFrog(r Renamable) {
	r.Rename("Frog")
}
func main() {
	fmt.Println("vsgsgs \r sgfsgfsg")
	//var s = Salutation{"Alexmason", "Hello"}
	slice := Salutations{

		{"Narendranath", "Hello"},
		{"CaptainPrice", "Hello"},
		{"Alexmason", "Hello"},
	}
	//slice = slice[:2] //slices of slice
	//slice = append(slice, Salutation{"Tom", "Hi"})
	//to double every thing
	// slice =append(slice,slice ...)
	//for removing ------slice = append(slice[:1], slice[2:]...)
	slice = append(slice[:1], slice[2:]...)
	slice[0].Rename("Narendranath Reddy")
	RenameToFrog(&slice[0])

	done := make(chan bool, 2)
	go func() {
		slice.Greet(CustomPrint("!!!"), true, 6)
		done <- true
		done <- true
		fmt.Println("Done")
	}()
	slice.Greet(CustomPrint("<C>"), true, 6)
	msg := <-done
	fmt.Println(msg)

	c := make(chan Salutation)
	c2 := make(chan Salutation)

	go slice.ChannelGreeter(c)
	go slice.ChannelGreeter(c2)

	for {
		select {

		case s, ok := <-c:
			if ok {
				fmt.Println(s, ":1")
			} else {
				return
			}
		case s, ok := <-c2:
			if ok {
				fmt.Println(s, ":2")
			} else {
				return
			}
		default:
			fmt.Println("Waiting .....")

		}
	}

}
