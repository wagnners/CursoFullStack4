using System;

namespace Aula34
{
    class Program
    {

        static void primeiraAula()
        {
            string name = "Wagner";
            bool ativo  = true;

            int myInt = 10;
            double myDouble = myInt;

            int myInt2 = (int) myDouble;

            Console.WriteLine("informe sua idade");
            //string idade = Console.ReadLine();
            int idade = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Sua idade é " + idade);

            string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };

            foreach (string i in cars)
            {
                Console.WriteLine(i);
            }

            for (int i = 0; i < 10; i++)
            {

                if (i == 4)
                {
                    break;
                }

                Console.WriteLine(i);
            }

            for (int i = 0; i < 10; i++)
            {

                if (i == 4)
                {
                    continue;
                }

                Console.WriteLine(i);
            }

        }

        static void ex1(string nome, int idade)
        {
            Console.WriteLine(nome + " - " + idade);
        }

        static int soma(int val1, int val2)
        {

            return val1 + val2;

        }

        static void filhoMaisNovo(string filho1, string filho2, string filho3)
        {
            Console.WriteLine("O filho mais novo é:" + filho3);
        }

        static void Main(string[] args)
        {

            // primeiraAula();

            //ex1("Paula Cristina", 15);
            //ex1("Ana Cardoso", 30);
            //ex1("Fulano", 45);
            //ex1("Maria Silva", 35);

            //int resultado = soma(15, 5);

            //Console.WriteLine(resultado);

            filhoMaisNovo(filho3: "Mario", filho1: "Nicolas", filho2: "Antonio");

        }
    }
}
