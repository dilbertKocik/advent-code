// const testInput1 = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

const puzzleInputs = ['fzostwblnqkhpuzxirnevmaycq', 'fzastwblgqkupujxirnevmaucd', 'fzostwbxgakhpujxirnevmayci', 'uzosmwblgqkhlujxirnevmaycd', 'bzostwblgqkhpujxirnenfaycd', 'fzostwblghkhpujxibneemaycd', 'fzostwblgrkkpujxirnevqaycd', 'fzostwblgqkhpkjxirqkvmaycd', 'fzostwblgqdxpujbirnevmaycd', 'fzostwblgykhfujxirfevmaycd', 'fzostwbvgskhpujxirnevmagcd', 'flostwblgokhpuixirnevmaycd', 'fzostwblgzkhppjxirnevxaycd', 'ftosuwblgqkhpujxirnevmeycd', 'fzostkblgqkzpujxirnrvmaycd', 'fuostwbugqkhnujxirnevmaycd', 'frostwblgqkhpujsirneamaycd', 'bzostwblgqkhpajxirnevmuycd', 'fzysttbluqkhpujxirnevmaycd', 'czostgblgqkhpujxirnevmgycd', 'fzostwbcgqkhpujxirnevmavcr', 'vzostwbdgqrhpujxirnevmaycd', 'fzostwblgxkhpujxirnekmdycd', 'fzostwblgdkspzjxirnevmaycd', 'fzoqtwblgquhpujxirnevkaycd', 'fzostwblgqjhfujxirnevmayzd', 'fyostwblgtkhpujxilnevmaycd', 'izostwblzqkhpupxirnevmaycd', 'fzoaurblgqkhpujxirnevmaycd', 'fzostjblgqkhpbjxirbevmaycd', 'fzostwblgqkhpujmirngvmayca', 'fxostwbhgqkhiujxirnevmaycd', 'fzostwblngkhpujxirnemmaycd', 'fzosgwblgqkhpujxirnlvqaycd', 'bpostwblgqkhxujxirnevmaycd', 'fzhstwblgqshpujxirnepmaycd', 'fzootwbegqkhwujxirnevmaycd', 'fzmstwblgqkhmujxirnevsaycd', 'fzostwolgqkhpujxirnevmaysp', 'foostwblgqohpujxirnevmayyd', 'fzostwblgqkhgujxgrnevqaycd', 'fzostwbltqkhjujxipnevmaycd', 'fsostwblgqkhfujxirnevmayck', 'fzostwmlgqkbpujxifnevmaycd', 'fdostwblgqkhsujxirnecmaycd', 'fzostwblgquhpejxiinevmaycd', 'fzoqtwblgqkhkujxirnevmaywd', 'fzostwblmqkmpujxirnyvmaycd', 'fzjstwblgqkhpuyxirneomaycd', 'fzortwblgqkhpzjxprnevmaycd', 'fzosnwulgqkhpujxirnevpaycd', 'fzostwbegqkvpujxirnevmaykd', 'fzostwylzqkypujxirnevmaycd', 'fioshwblgqehpujxirnevmaycd', 'fzostwbliqkhoujxirnesmaycd', 'fzostwblgqkhpujdirnelmqycd', 'fzmstwblgqkhpujxirnnvpaycd', 'fzostwbtgqkhcujxirnevmaycz', 'fzostwblgqkfpujeignevmaycd', 'fzostwbegqkhpuvxirndvmaycd', 'fzostwblgqkcpujxmrnevmaycp', 'fvostwblgqkhpyjxirnevmaycx', 'fzostwblgqkhpufxirnevmzacd', 'fzisjwblglkhpujxirnevmaycd', 'fzosowbliqkhgujxirnevmaycd', 'fzostwblgqkhpujxirnyvmaywl', 'fzostwbllqnzpujxirnevmaycd', 'fzostwblgquhpujxirneomayci', 'fzostwblgqjepujximnevmaycd', 'fzostwblgqrhbujxijnevmaycd', 'fzostoblgqkhpujxirnevmoynd', 'fzortwblgqkhpujxixnevjaycd', 'fzostwhlgqkapujxirnevmaych', 'fzostwblgakhpujxirnevfayct', 'faostwblgqohpljxirnevmaycd', 'fzostwbhgqkhpujxirnyvcaycd', 'fjostwblgqkhpwjxirnevjaycd', 'fzostwblgqklpuixirnevmayxd', 'fzostwblgqkhhujxirncvmayce', 'fzostwblzqkhpzjxkrnevmaycd', 'fzostwblqqkbpujxirnevmcycd', 'ffostwblxqkhpujxirnevmayxd', 'fzostwblgqkhpbuxirnefmaycd', 'szostiblgqkhpujxirnevoaycd', 'fhlstwblgqkhpujxirnevmaycb', 'fzostwblgwfhpujxirnevmayed', 'fyostwblgqkhzujxirnevmayjd', 'fzostwblgqkvrujxirnevmaucd', 'fzestwblghkhpujxirnevmaycq', 'foostwbkgqkhhujxirnevmaycd', 'fpxstwblgqkhpujxirzevmaycd', 'fsostwtlgqmhpujxirnevmaycd', 'feostwelgqkhpumxirnevmaycd', 'fzostwbvgqkhpujkirnevmayce', 'fzmsewblgqahpujxirnevmaycd', 'fzsstsblgkkhpujxirnevmaycd', 'fzostwblgqkhxajxirneumaycd', 'fzostwblmqkhpujyisnevmaycd', 'gzostwblgqkhphjxirnevmavcd', 'fzostwblgckgpujxirnzvmaycd', 'qzostdblgqkhpujxirnevmaywd', 'fzoshwblgskhpufxirnevmaycd', 'fzosdwblgqkhpujkirnevjaycd', 'fzvstwblgqkhpuixdrnevmaycd', 'szostwblgqxhpujeirnevmaycd', 'fzosvwblgtkhpujxirnevmoycd', 'fzoscwblgqkkpujxirnevmvycd', 'fzostsblgqnlpujxirnevmaycd', 'fzostwblgmkhpujxlrnevjaycd', 'fzosnwblgqklpugxirnevmaycd', 'fcostwblgqpmpujxirnevmaycd', 'ozostwblgbkhpujxirnevmafcd', 'fzostwbagqkhiujxirneemaycd', 'fzosxwblgqkhpumxirneymaycd', 'fpostkblgqkhpujxianevmaycd', 'fzostwblgvkhhujxirnevmaycl', 'fzobtwtlgqkhpuwxirnevmaycd', 'fzostwvwgqkhpujxirtevmaycd', 'xzostwglgqkhpujtirnevmaycd', 'fzostwblgvkhtujxirnzvmaycd', 'jzostwblgqkhpujxirrevmvycd', 'pzostwbagqkhpujxirnevjaycd', 'fzostwclgqkhpujxirnhvmeycd', 'fzostwblglkhpujxirnevmayrf', 'fzoskwblnqkhpujxirnevmaysd', 'fzostbblgqkhpujxirnevmjycw', 'fzostwblggobpujxirnevmaycd', 'fzostwblgckhpijxirnevmayxd', 'fiostwrlgqkhpujxirnevmayck', 'frfstwblvqkhpujxirnevmaycd', 'fzowvwblgqkhpujsirnevmaycd', 'fzostwblgquhgujxirnevmiycd', 'fzoztwblgqkhpujxvrnevmaycj', 'fzostnbtgqkhpujxixnevmaycd', 'fzfstwblgjkrpujxirnevmaycd', 'fzostwblpqkhpdrxirnevmaycd', 'fivstwblgqkhpuixdrnevmaycd', 'fzostwbpgqkhpdjxirnewmaycd', 'fzostwblgqkhpdjxsrngvmaycd', 'fzostwblsqkhpujxisnxvmaycd', 'fcosvwblgqkhpujxirnevmavcd', 'fzostwrlgekhgujxirnevmaycd', 'fzostwblgqkhpujxindeimaycd', 'uzostwblgqshpujxirnevmwycd', 'fzostwzliqkhpujxirnevmaycu', 'zzostwbtgqkhpijxirnevmaycd', 'fzoltwblgqkhpujxinncvmaycd', 'fzostwblgqkzpujxprnevmayhd', 'fqostwblgqkhpujrirnevmzycd', 'jzostwblgqkhpuzxkrnevmaycd', 'fzostwblgqkhpuwxirszvmaycd', 'fzostwblgqkhpxjxilnevdaycd', 'fpmstwblgqkhpujxirnwvmaycd', 'fzoejwblqqkhpujxirnevmaycd', 'fzostwblgkshzujxirnevmaycd', 'fzoatqblgqxhpujxirnevmaycd', 'fzostwblgpkhpujiipnevmaycd', 'fzostwblgqghpujgbrnevmaycd', 'izosowblgqkhpujxirnejmaycd', 'fzostwblgqthpujxjrnevmalcd', 'fzovtwbcgqkhpujxicnevmaycd', 'fzoatwblgqkhpujxidntvmaycd', 'kzpstwblgqihpujxirnevmaycd', 'fzosawnlgqkhpujxibnevmaycd', 'fzostwblgqkhpujxarnevdajcd', 'bzostwblgqkhpujxvrnevmrycd', 'fzostwblgqkhpwfxirnevmazcd', 'fzostwblgqknpujyiqnevmaycd', 'zzostwblgqkhpujyirneqmaycd', 'flosiwblgqihpujxirnevmaycd', 'fzoetwblgqkhxujxirnevmeycd', 'fznstwbugqkhpujxibnevmaycd', 'fzbstwblgqkhpudxitnevmaycd', 'fzostwblgqkhkujxirnexaaycd', 'fzohthblgqkhpujxiknevmaycd', 'fzostwblgqkhpujxirnevvayjt', 'fzostwblggkhpujxirnrvqaycd', 'fzostwblgqslpujxirnevmaysd', 'aoostwblgqkhpnjxirnevmaycd', 'fzostwblgqkhlutxirnevuaycd', 'fxostwbugqkhpujxirnexmaycd', 'fzoftwblgqkhpsjxirnevmaywd', 'fzbstwblgqkhndjxirnevmaycd', 'fzostwblgqkhpxjxipnlvmaycd', 'fzostwbloqkhowjxirnevmaycd', 'fzostwblgqkcpdjxirnevnaycd', 'vzostiblgqkhpsjxirnevmaycd', 'fzostwblgqkhazjxirnevmaycg', 'fzostaklgqkhpujxirnevmaypd', 'fzostwblgkkhppjxirnevpaycd', 'izostwblgqkhpujairhevmaycd', 'fzostwdlgqkhpuqxzrnevmaycd', 'fzostwblgqkepujxernevmayct', 'fzostdblgqkhpujxyrnehmaycd', 'fzostwblgqkhsujxirnenfaycd', 'fzostwblgqkhpujxifnevmajld', 'fzostwblgokhpujxirxemmaycd', 'fzastwblcqkhpujxiruevmaycd', 'fzostwsxgqkhpuexirnevmaycd', 'xzosxwblgqkhpujxirnetmaycd', 'fzostwblgqkhpuexirnevmkccd', 'fzostwblgqklpujxirnermfycd', 'fzoetwblgqkhpujxirnehhaycd', 'ffostwblgvkhpujxirnevmazcd', 'fcosywblgqkhpujxirnevmaycy', 'fzmstwblgqkhpujxdrnevmaycl', 'fpostwblgqahpujxirnqvmaycd', 'fzostwbmgqkhpulxornevmaycd', 'fzostwblgqkopujxqrnevmrycd', 'fzostwblgqkhpujxisnevmjgcd', 'fzogtwulfqkhpujxirnevmaycd', 'fzostwalgqkhpcjxirnevmayud', 'fzosxwblgqkhpujxirnevmasmd', 'fzostwblgrkowujxirnevmaycd', 'fzostsblgqkhpujxirnevmsccd', 'fzostwblgqkhpujxfrnnvmaocd', 'fzostwblgqkhpujxiynsvkaycd', 'fzosowblgqkhpwjxirnevmaecd', 'fzosgwblgfkhpujxyrnevmaycd', 'fzostsblgzkhpujmirnevmaycd', 'fzostwblrqkhyuixirnevmaycd', 'qzostwblgqkhpujxyrnevmvycd', 'lzostwblgqkhpujxirqevmaymd', 'fzostwblgqkbpujxirnefbaycd', 'fzostwblgmihpujxirnevmafcd', 'fzostmblgqkhpujxirnevmpynd', 'fzoltwblgqkhpujlihnevmaycd', 'fzostwblgqkhpujdirneviyycd', 'fzgspwblgqkhpqjxirnevmaycd', 'fzostwblgqkhtujkirnevmayld', 'fjostwblgqkhpagxirnevmaycd', 'fzpsthblgqkhpuzxirnevmaycd', 'fzostwblgqkhpuhxzrneymaycd', 'fzoftwblgqkepujxirnevcaycd', 'fzostwblgqkbpyjxipnevmaycd', 'fzostwqlgqkhpujxirjevmayad', 'fzoxtwblgqkypupxirnevmaycd', 'fzostwblgqwhpuoxiynevmaycd', 'fzostwblgqkhpfjkirnevmavcd', 'fzoqtwblgqkhpujxirnermaycp', 'fzostwbngxkhpujxirnevmayqd', 'fzostwqogqkhpcjxirnevmaycd', 'fzostwblyqkhpujxvrnevmayzd', 'vzostwblgqkhpujxirnevmlzcd', 'fzostwblaqkhpujxirnevbajcd', 'fdostwblgqkhpujxzrnevmayod', 'fzostxbloqkhpujxirnevmcycd', 'fzostwbcgqkhpyjxirnegmaycd', 'fzostwblgqkhpuyxirnzrmaycd', 'fzustwycgqkhpujxirnevmaycd'];

const calculateChecksum = puzzleInputs => {
    const piCharCounts = puzzleInputs.map(pi => {
        let charCounts = {};
        pi.split('').map(char => {
            if (charCounts[char] && charCounts[char].count) {
                charCounts[char].count++;
            } else {
                charCounts[char] = {count: 1};
            }
        });
        return Object.entries(charCounts);
    });

    let doubles = 0;
    let triples = 0;
    piCharCounts.map(picc => {
        picc.some(cc => cc[1].count === 2) && doubles++;
        picc.some(cc => cc[1].count === 3) && triples++;
    });

    return doubles * triples;
}

console.log('checkSum', calculateChecksum(puzzleInputs));