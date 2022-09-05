#include <stdio.h>

int main()
{
        int m;

        scanf("%d", &m);

        int flag = 0;

        for (int i = 2; i < m; i++)
        {
                if (m % i == 0)
                {
                        flag = 1;
                        break;
                }
        }
        if (flag == 1)
		printf("%d is not a prime number\n", m);
	else
		printf("%d is a prime number\n", m);
	return 0;
}
