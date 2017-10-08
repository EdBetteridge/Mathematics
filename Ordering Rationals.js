for (var i = 1; i<10; i++) {
    
	var bin = i.toString(2).split("").reverse();
	var RLE = "";
	var count = 1;
	var prev = bin[0];
    
	for (var j = 1; j < bin.length; j++) {
        
		if (bin[j] == prev) {
			count++;
		} else {
			RLE += "+1/(" + count;
			count = 1;
			prev = bin[j];
		}
	}
    
	RLE += "+1/" + count + Array((RLE.match(/\(/g) || []).length + 1).join(')');

	if (bin[0] == "1") {
		RLE = RLE.substring(3);
	}
    
	console.log(eval(RLE));
}