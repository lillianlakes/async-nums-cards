"use strict"

const NUMBERS_API_URL = "http://numbersapi.com";

const $numberFactsResults = $("#number-facts-results");

// 
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

async function showMultiplesResults(numbers) {

    const NumberFactsForMultiples = await getMultipleNumberFacts(numbers);

    for (let num in NumberFactsForMultiples) {
        $numberFactsResults.append(`<p>For your number ${num}, your fact is ${NumberFactsForMultiples[num]}.`);
    }
}

// showMultiplesResults([1, 2, 3, 4]);

async function getFourFacts(number, times) {


    const response1 = axios.get(`${NUMBERS_API_URL}/${number}?json`);
    const response2 = axios.get(`${NUMBERS_API_URL}/${number}?json`);
    const response3 = axios.get(`${NUMBERS_API_URL}/${number}?json`);
    const response4 = axios.get(`${NUMBERS_API_URL}/${number}?json`);

    // await Promise.all(responses)

    return [await response1, await response2, await response3, await response4];

}

async function showFourFacts(number) {
    const results = await getFourFacts(number);

    for (let response of results) {
        $numberFactsResults.append(`<p>${response.data.text}.`);
    }
}

// showFourFacts(7);