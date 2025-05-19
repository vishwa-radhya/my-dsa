import math
def merge_sort(arr):
    if len(arr) < 2: return arr
    # mid = math.floor(len(arr)/2)
    mid = len(arr) // 2
    left_array = arr[:mid]
    right_array = arr[mid:]
    return merger(merge_sort(left_array),merge_sort(right_array))

def merger(left_array,right_array):
    result=[]
    # while(len(left_array) and len(right_array)):
    while left_array and right_array:
        if left_array[0] <= right_array[0]: result.append(left_array.pop(0))
        else: result.append(right_array.pop(0))
    return result+left_array+right_array
print(merge_sort([3,4,1,43,21,32,7]))

# avoiding pop for performance
'''
def merge_sort(arr):
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    left_array = merge_sort(arr[:mid])
    right_array = merge_sort(arr[mid:])
    return merger(left_array, right_array)

def merger(left_array, right_array):
    result = []
    i = j = 0

    while i < len(left_array) and j < len(right_array):
        if left_array[i] <= right_array[j]:
            result.append(left_array[i])
            i += 1
        else:
            result.append(right_array[j])
            j += 1

    # Append remaining elements
    result.extend(left_array[i:])
    result.extend(right_array[j:])
    return result

print(merge_sort([3, 4, 1, 43, 21, 32, 7]))

'''