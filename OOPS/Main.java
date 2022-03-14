package OOPS;
// import java.util.*;
// import bank;

class Shape{
    // String color;
    public void area(){

    }
}

class Triangle extends Shape{
    public void area(int l, int h){
        System.out.println((1/2)*(l)*(h));
    }
}

class Circle extends Shape{
    public void area(int r){
        System.out.println(3.13*r*r); 
    }
}

class EuilateralTriangle extends Triangle{
    public void area(int l, int h){
        System.out.println((1/2)*(l)*(h));
    }
}

public class Main {
    public static void main(String[] args) {

        
    }
}
