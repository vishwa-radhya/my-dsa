def quick_sort(arr):
    if len(arr)<2: return arr
    pivot = arr[-1]
    left=[]
    right=[]
    for i in range(len(arr)-1):
        if(arr[i]<pivot):
            left.append(arr[i])
        else:
            right.append(arr[i])
    return quick_sort(left)+[pivot]+quick_sort(right)
# print(quick_sort([4,56,21,46,78,11,25]))

def quick_sort_in_place(arr,low=0,high=None):
    if high is None: high = len(arr) -1
    if(low>=high): return arr
    partition_index = partitioning(arr,low,high)
    quick_sort_in_place(arr,low,partition_index-1)
    quick_sort_in_place(arr,partition_index+1,high)
    return arr
def partitioning(arr,low,high):
    i = low-1
    pivot = arr[high]
    for j in range(low,high):
        if(arr[j]<pivot):
            i+=1
            arr[i],arr[j]=arr[j],arr[i]
    arr[i+1],arr[high]=arr[high],arr[i+1]
    return i+1
print(quick_sort_in_place([4,56,21,46,78,11,25]))