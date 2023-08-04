#!/usr/bin/python3

def subsetA(arr):
    arr.sort()
    print(arr)

    left = 0
    right = len(arr) - 1

    while(left < right):
        B = arr[0:left+1]
        A = arr[right:len(arr)]

        if sum(B) < sum(A):
            left += 1

            print("{} B".format(B))
            print("{} A".format(A))
        else:
            right -= 1

    if sum(B) > sum(A):
        B = arr[0:left]
        A = arr[right:len(arr)]

        print("{} B".format(B))
        print("{} A".format(A))
    return(A)

print(subsetA([9,8,7,5,5,1]))
#if __name__ == "__main__":
    #subsetA(arr)
