#include <stdio.h>

int main(void)
{
	int i, sum = 0;

	/**sum of odd numbers from 1 to 50 **/
	for (i = 1; i <= 50; i++)
	{
		/** checking if it's odd number or not **/
		if (i % 2 != 0)
		{
			sum = sum + i;
		}
	}
	printf("%d\n", sum);
	return (0);
}
