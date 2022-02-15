module.exports = {
    answers: [
        `#include <bits/stdc++.h>
        using namespace std;

        int main(){
            int numbers_of_elements;
            cin >> numbers_of_elements;
            vector<int> array(numbers_of_elements);
            int sum_of_array = 0;

            for(int i = 0 ; i < numbers_of_elements ; i++){
                cin >> array[i];
                sum_of_array += array[i];
            }

            cout << sum_of_array;
            return 0;
        }


        `, 
        `
        Hi
        `
    ]
}