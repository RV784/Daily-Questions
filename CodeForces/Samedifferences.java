package CodeForces;

import java.util.HashMap;

//https://codeforces.com/contest/1520/problem/D
public class Samedifferences {
    public static void main(String[] args) {
        
    }

    static int counter(int[] arr){
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int i = 0 ; i < arr.length ; i++){
            arr[i] = arr[i] - i;
        }

        for(int i = 0 ; i < arr.length ; i++){
            if(map.containsKey(arr[i])){
                map.put(arr[i], map.get(arr[i]) + 1);
            }else{
                map.put(arr[i], 1);
            }
        }

        int ans = 0;

        for(int key : map.keySet()){
            int val = map.get(key);
            if(val == 1){
                continue;
            }else{
                ans = ans + val*(val-1)/2;
            }
        }



        return ans;
    }
}
