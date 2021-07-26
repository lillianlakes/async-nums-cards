"use strict"

const NUMBERS_API_URL = "http://numbersapi.com";

const $numberFactsResults = $("#number-facts-results");

async function getFavoriteNumberFact(number) {
    const response = await axios({
        url: `${NUMBERS_API_URL}/${number}?json`,
        method: 'GET'
    });

    return response.data.text;
}

// const NumberFactFor7 = await getFavoriteNumberFact(7);

async function getMultipleNumberFacts(numbers) {

    const numbersString = numbers.join(',');

    console.log(numbersString);

    const response = await axios({
        url: `${NUMBERS_API_URL}/${numbersString}?json`,
        method: 'GET'
    });

    return response.data;
    // return response.data.text;
}

async function showResults(numbers) {

    const NumberFactsForMultiples = await getMultipleNumberFacts(numbers);

    for (let num in NumberFactsForMultiples) {
        $numberFactsResults.append(`<p>For your number ${num}, your fact is ${NumberFactsForMultiples[num]}.`);
    }
}

showResults([1, 2, 3, 4]);