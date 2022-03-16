function firstNotRepeatingCharacterV1(s) {
  const characteres = s.split("");

  return characteres.reduce((prev, curr, index, characteres) => {
    if (prev !== "_") {
      return prev;
    }

    const charAmount = characteres.filter((char) => char === curr).length;

    if (charAmount === 1) {
      return curr;
    }

    return prev;
  }, "_");
}

function firstNotRepeatingCharacterV2(s) {
  const characteres = s.split("");
  let char = "_";

  for (let i = 0; char === "_" && i < characteres.length; i++) {
    let isRepeated = false;
    for (let j = 0; j < characteres.length; j++) {
      if (characteres[i] === characteres[j] && i !== j) {
        isRepeated = true;
        break;
      }
    }

    if (!isRepeated) {
      char = characteres[i];
      break;
    }
  }

  return char;
}

function firstNotRepeatingCharacterV3(s) {
  const chars = s.split("");
  const countedChars = chars.reduce((amountByChar, char) => {
    if (!amountByChar[char]) {
      return {
        ...amountByChar,
        [char]: 1,
      };
    }

    return {
      ...amountByChar,
      [char]: amountByChar[char] + 1,
    };
  }, {});

  return Object.keys(countedChars).reduce((letter, prop) => {
    if (letter !== "_") {
      return letter;
    }

    if (countedChars[prop] === 1) {
      return prop;
    }

    return "_";
  }, "_");
}

console.log(firstNotRepeatingCharacterV1("abacabad"));
console.log(firstNotRepeatingCharacterV2("abacabad"));
console.log(firstNotRepeatingCharacterV3("abacabad"));

console.log(firstNotRepeatingCharacterV1("asdfgasdfg"));
console.log(firstNotRepeatingCharacterV2("asdfgasdfg"));
console.log(firstNotRepeatingCharacterV3("asdfgasdfg"));
