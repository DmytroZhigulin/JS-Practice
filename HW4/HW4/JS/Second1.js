let Arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
document.write('</p>' + Arr + '</p>');
document.write('</p>' + Arr.sort() + '</p>')

let indexN;
for (indexN = 0; indexN < Arr.length; indexN++) {
    console.log(Arr[indexN]);
        if (Arr[indexN] > 0) {
            document.write(Arr[indexN] + '; ');
        }
}