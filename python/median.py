# Python code for median with
# case of returning double
# value when even number
# of elements are present
# in both array combinely
median = 0
i = 0
j = 0

# def to find max
def maximum(a, b) :
    return a if a > b else b

# def to find minimum
def minimum(a, b) :
    return a if a < b else b

# def to find median
# of two sorted arrays
def findMedianSortedArrays(a, n, b, m) :

    global median, i, j
    min_index = 0
    max_index = n

    while (min_index <= max_index) :

        i = int((min_index + max_index) / 2)
        j = int(((n + m + 1) / 2) - i)

        # if i = n, it means that
        # Elements from a[] in the
        # second half is an empty
        # set. and if j = 0, it
        # means that Elements from
        # b[] in the first half is
        # an empty set. so it is
        # necessary to check that,
        # because we compare elements
        # from these two groups.
        # Searching on right
        if (i < n and j > 0 and b[j - 1] > a[i]) :
            min_index = i + 1

        # if i = 0, it means that
        # Elements from a[] in the
        # first half is an empty
        # set and if j = m, it means
        # that Elements from b[] in
        # the second half is an empty
        # set. so it is necessary to
        # check that, because we compare
        # elements from these two groups.
        # searching on left
        elif (i > 0 and j < m and b[j] < a[i - 1]) :
            max_index = i - 1

        # we have found the
        # desired halves.
        else :

            # this condition happens when
            # we don't have any elements
            # in the first half from a[]
            # so we returning the last
            # element in b[] from the
            # first half.
            if (i == 0) :
                median = b[j - 1]

            # and this condition happens
            # when we don't have any
            # elements in the first half
            # from b[] so we returning the
            # last element in a[] from the
            # first half.
            elif (j == 0) :
                median = a[i - 1]
            else :
                median = maximum(a[i - 1], b[j - 1])
            break



    # calculating the median.
    # If number of elements
    # is odd there is
    # one middle element.

    if ((n + m) % 2 == 1) :
        return median

    # Elements from a[] in the
    # second half is an empty set.
    if (i == n) :
        return ((median + b[j]) / 2.0)

    # Elements from b[] in the
    # second half is an empty set.
    if (j == m) :
        return ((median + a[i]) / 2.0)

    return ((median + minimum(a[i], b[j])) / 2.0)


# Driver code
a = [900]
b = [10, 13, 14]
n = len(a)
m = len(b)

# we need to define the
# smaller array as the
# first parameter to make
# sure that the time complexity
# will be O(log(min(n,m)))
if (n < m) :
    print ("The median is : {}".format(findMedianSortedArrays(a, n, b, m)))
else :
    echo ("The median is : {}".format(findMedianSortedArrays(b, m, a, n)))

# This code is contributed
# by Manish Shaw(manishshaw1)
