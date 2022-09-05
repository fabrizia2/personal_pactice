#include <stdio.h>

int main()
{
	/** remainder of number when divided by 10 **/

	int num, remainder;

	scanf("%d", &num);

	remainder = num % 10;
	printf("%d\n", remainder);

	return (0);
}
