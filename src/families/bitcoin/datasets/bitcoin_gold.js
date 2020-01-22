// @flow
import type { CurrenciesData } from "../../../__tests__/test-helpers/bridge";
import type { Transaction } from "../types";

const dataset: CurrenciesData<Transaction> = {
  scanAccounts: [
    {
      name: "bitcoin_gold seed 1",
      apdus: `
      => e040000009028000002c80000000
      <= 4104b9b3078fbdef02b5f5aa8bb400423d5170015da06c31ad7745160cbab1fa4cdc965f271b924c2999639211310f6d35029698749b38ea7e64608de3ebcdbaa46a22474b433972354e6779524578346e39774c413134524258326e6e68787a7176527267cdff3f19b89aab59d5804050b1c99f99cb079630c786144cd6cba8e84c29750c9000
      => e016000000
      <= 00260017010c426974636f696e20476f6c64034254479000
      => e040000009028000002c80000000
      <= 4104b9b3078fbdef02b5f5aa8bb400423d5170015da06c31ad7745160cbab1fa4cdc965f271b924c2999639211310f6d35029698749b38ea7e64608de3ebcdbaa46a22474b433972354e6779524578346e39774c413134524258326e6e68787a7176527267cdff3f19b89aab59d5804050b1c99f99cb079630c786144cd6cba8e84c29750c9000
      => e04000000d038000002c8000000080000000
      <= 41041f6c89d7b896277954ddad21110dca739b67a5aaae58afe16c5cd212925339f8df8de52910a71ce7475bea7b51f24020fa4e0097622242ed7e3b17e275e1d8892247533344597635704552524e786b78526547754658676e36555946724a756b576d6890489ace59735ee2a130e5db0a3cb43734d1e0f17c66c182dd6af01e325600859000
      => e04000000d038000002c8000000080000001
      <= 4104c9bc195c9c0e1a51127f8b1c372b4543e14041431e6b57923dd52ba4174b25ef39cc32d8c50cc37214ae93ffcca926163269e729dc80bd95ee545f35dc3e0ed622474c62335067323169627731524b41673444566935457477694d45473441386f59515a31399b978a87550d7000702b7033d5c087434320794348fa622d26bdec1dfe9000
      => e040000109028000003180000000
      <= 4104b3b0982673f35bd288e681c371636145c7a8e17d4c59a6c8704100d366fa06da4246b7de1535511f9e11ad111683cbeafd992c4d1390b3a04fd79a51159f869122415735393878484a4c4d4766714b4a4a36467262534c45647a486a7a70326f4a566bd0ce17bf8b118b0d5b5c93a905ae915e50e42d6f3f5afeea9e319d461388babd9000
      => e016000000
      <= 00260017010c426974636f696e20476f6c64034254479000
      => e040000109028000003180000000
      <= 4104b3b0982673f35bd288e681c371636145c7a8e17d4c59a6c8704100d366fa06da4246b7de1535511f9e11ad111683cbeafd992c4d1390b3a04fd79a51159f869122415735393878484a4c4d4766714b4a4a36467262534c45647a486a7a70326f4a566bd0ce17bf8b118b0d5b5c93a905ae915e50e42d6f3f5afeea9e319d461388babd9000
      => e04000010d03800000318000000080000000
      <= 41049367da0966f580263501b50bec1430730b742ba2866f0537310a9a45c493dc875fc7a38df3aab224b42962f13d1c22183a597cc21813aac9bbb0a1bab48e1236224154453867704432366f4e4b5847577561644a6a46324246445936584c784c4b6f5a9d40147cfc05c038a58c03a8b6bb23b30774f6ef6ca3e2be8fc8cbb2329515fa9000
      => e04000010d03800000318000000080000001
      <= 4104f8b1ef8090ebb036e3a0a67574e3930704dd18f26ccc7ca2d441031c8b8f1ffb4853a0db133622e6d15957d69e7077dc296665e1a75cb58456e880711b83fd922241514e624448454b66753741536d3450696670315a4c6a456662787a6a4841454b64adaa264cde663f664f6193417abd943d2a4c1dfb0002ad769843a92f370386279000
      => e040000009028000002c8000009c
      <= 4104c2bcf1a177bef14a27674f098c3a04ea5a3801ba1ebc74aaa96735189e81ceb71c782105bd5d72f333e382ecce2efee033e6262e5fc2e6dc55b122d62689b22f22474d557a74476d575368523336575465766853534c776a76676345796f686433395581acd2114a3a8c8b0a21232367d37642a376fb81d60e6f589f05f7f37337b73f9000
      => e016000000
      <= 00260017010c426974636f696e20476f6c64034254479000
      => e040000009028000002c8000009c
      <= 4104c2bcf1a177bef14a27674f098c3a04ea5a3801ba1ebc74aaa96735189e81ceb71c782105bd5d72f333e382ecce2efee033e6262e5fc2e6dc55b122d62689b22f22474d557a74476d575368523336575465766853534c776a76676345796f686433395581acd2114a3a8c8b0a21232367d37642a376fb81d60e6f589f05f7f37337b73f9000
      => e04000000d038000002c8000009c80000000
      <= 41042b413ae5067b4b3474e6213f54d3ea46fcd9463c9d3bf2087cb1dba2d44ebdd113816ed3c618c9d88eb45abe2eb4e2ac5d6a9ff9106fe27184a3990052ddf7bd22474d3648444459503465426a33584d7132754431523134665543646a4542504e363707de6c925170aa8a10e64853b31b855d49f459a7d6a6c12596f9cb94ccf342cf9000
      => e04000000d038000002c8000009c80000001
      <= 41048f9ead34ccf6125ee2c19d72985cf11a3a81f2c6e17a064c79a8ee12ef0e2d064ae1487429fc526b678552655de4613bcb7691dadba5db33ebf7b69a992997c822474e594b61784b526b56504555564550356d5143383631314c78337a66576a7a534c691e17d4bbc215d75ecf48bc6120071b13ba7d262e55607ea6d93cb2762ca0f29000
      => e04000010902800000318000009c
      <= 41047ad777a5de434e624b37689d97d37aa554a741bc29a799047a20bb3c74b3a10addbe09de33b0325e9aad003b3a18208e4d8876b9c6058e91a42294785a7137632241626d50627a3168656b465958767850483373793975563479636f6b51675873396723cf945c4fd462710dd4a4832b7fb848d39733c2f93bd7e030619e85cb8ae7219000
      => e016000000
      <= 00260017010c426974636f696e20476f6c64034254479000
      => e04000010902800000318000009c
      <= 41047ad777a5de434e624b37689d97d37aa554a741bc29a799047a20bb3c74b3a10addbe09de33b0325e9aad003b3a18208e4d8876b9c6058e91a42294785a7137632241626d50627a3168656b465958767850483373793975563479636f6b51675873396723cf945c4fd462710dd4a4832b7fb848d39733c2f93bd7e030619e85cb8ae7219000
      => e04000010d03800000318000009c80000000
      <= 410444753a6b1ab756f518d36d9febc64d8cd5594e10f822681de0365ee28526dcfcce1b81b2149015df7802d29120a051fa4a1669a9c6ed861b1bf3c317caab717722415833476a367257696f6655436e4a513945453358796f776244784a666578744842f5f64bcdf43f4e19b0d886fc91c9b57b81211d6565be6620d3a209fdd323a8139000
      => e04000010d03800000318000009c80000001
      <= 4104d81838405a30c5b171f919b629cdd612bc74fdd175e3858f2f4e8ea622cdac41635d008020472bde38041e4efacb09df8017ff68b537604abe2cb484d6aa855b22414875705973445263557a7564655466736b4d66334b664d4d72675539716e657644f76d1b59926ee010a17c9837c246cf1ed38cc9c7f30b4c82ca190c7e8aebd47b9000
      => e04000010d03800000318000009c80000002
      <= 41044d13f9ca6fd232206e55fccf6ed382887a987408d243299b7edb3ddf64cfeb124e3c8742314b4062e75d992a8d7dd0b375bc264883fcc8e8e46ca7c4a0c5ef0e22415961396d3143626f4a69677a42344136436573447976326259336e4c6352653137be82101472591e94d38aae151e0c4f54f379dbdfb9c63c912b6fb1f67aff98309000
      `
    }
  ]
};

export default dataset;
