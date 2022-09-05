#include <stdio.h>

int main()
{
	/** any number % 10 gives the last digit of the number **/

	int num, last_digit;

	scanf("%d", &num);

	last_digit = num % 10;
	printf("%d\n", last_digit);

	return (0);
}
