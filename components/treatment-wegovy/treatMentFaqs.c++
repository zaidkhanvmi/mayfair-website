#include <stdio.h>
 
int main(){
    printf("Hello, World!\n");
    return 0;
}

// Loop in C

int main(){
    int i;
    for(i = 1; i<=5;i++){
        printf("%d ", i);
    }
    return 0;
}

int main(){
    int number = 0;
    while(number <= 0){
        printf("Enter a positive number: ");
        scanf("%d",&number);
    }
    printf("You entered : %d\\", number);
    return 0;
}