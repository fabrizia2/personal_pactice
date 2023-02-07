#include <stdio.h>

int main(void)
{
	int ren, king;

	for (ren = 1; ren <= 3; ren++)
	{
		for (king = 1; king <= 17; king++)l
		{
			if ((king >= 4-ren && king <= 5 + ren) || king >= 13 - ren && king <= 14 + ren)
				printf("@");
			else
				printf(" ");
		}
		printf("\n");
	}
	for (ren = 1; ren <= 9; ren++)
	{
		for(king = 1; king <= 17; king++)
		{
			if (king >= ren && king <= 18 - ren)
				printf("@");
			else
				printf(" ");
		}
		printf("\n");
	}
}
