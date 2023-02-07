using System;

namespace AgeCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your birthdate (yyyy-mm-dd):");
            DateTime birthdate = DateTime.Parse(Console.ReadLine());
            DateTime now = DateTime.Now;
            int age = now.Year - birthdate.Year;

            if (now < birthdate.AddYears(age))
            {
                age--;
            }

            Console.WriteLine("Your age is: " + age);
            Console.ReadLine();
        }
    }
}

