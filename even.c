#include <stdio.h>

int main()
{
	int i, sum = 0;

	/**sum of all the even numbers from 1 to 100 **/
	for (i = 1; i <= 100; i++)
	{
		/** checking for the even numbers **/
		if (i % 2 == 0)
		{
			sum = sum + i;
		}
	}
	printf("%d\n", sum);

	return (0);
}
