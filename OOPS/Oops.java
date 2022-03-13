package OOPS;
public class Oops {

    static class Pen{
        String color;
        String type;

        public void write(){
            System.out.println("Write something " +  this.type + " " + this.color);
        }

        public void printColor(){
            System.out.println(this.color);
        }
    }

    static class Student{
        String name;
        int age;

        public void printInfo(String name){
            System.out.println(name);
        }

        public void printInfo(int age){
            System.out.println(age);
        }

        public void printInfo(String name, int age){
            System.out.println(name + " " + age);
        }
    }

    public static void main(String[] args) {
        // Pen pen1 = new Pen();
        // pen1.color = "Blue";
        // pen1.type = "gel";
        // pen1.write();

        // Pen pen2 = new Pen();
        // pen2.color = "red";
        // pen2.type = "ball";

        // pen2.printColor();
        Student s2 = new Student();
        s2.name = "aman";
        s2.age = 24;
        s2.printInfo(s2.name);
        s2.printInfo(s2.age);
        s2.printInfo(s2.name, s2.age);
    }
}