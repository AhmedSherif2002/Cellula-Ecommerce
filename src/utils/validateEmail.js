 export default function validateEmail(email) {
    if(!email.includes("@")) return false;

    const splitted = email.split("@");
    const count = splitted.length - 1; // Number of occurences of @.
    if(count > 1) return false

    if(splitted[0].length <= 0 || splitted[1].length <= 0) return false; // No text before or after @.

    const secondPart = splitted[1];
    if(!secondPart.includes(".")) return false;

    const secondSplit = secondPart.split(".")
    const dotCount = secondSplit.length - 1; // Number of occurences of dot.
    if(dotCount > 1) return false;

    if(secondSplit[0].length <= 0 || secondSplit[1].length <= 0) return false; // No text before or after dot.

    return true;
}