using System;

namespace AgeCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            int birthYear = 2002;
            int currentYear = DateTime.Now.Year;
            int age = currentYear - birthYear;
            
            Console.WriteLine("Your age is: " + age);
            Console.ReadLine();
        }
    }
}

