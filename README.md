# ProjektIodine

## Team Members

1. Satyajit Ghana (satyajitghana7@gmail.com)
2. Prachi Poddar (prachi99poddar@gmail.com)

## Problem Statement

Semester Exams are nearing and everyone starts studying for it, but what if you can predict your scores even before writing the exam with great accuracy ? It will give a better understanding of how much a student has to study to score his desired marks. And the student can improve their performance to beat our predicted values.

Even before the semester exams. don't you have that anxiety if you have maintained that eligibility percentage attendance criteria ? 

Here at Endgame we are going to end these two anxieties and predict your marks and also the number of classes you need to attend to maintain that eligibility attendance.

## Proposed Solution

To predict the SEE marks we use Tensorflow library with a Sequential ML Model to fit a curve with the previous makrs that the student has got, these previous marks comes from TT1, TT2, TT3, A1, and A2, we pass these marks to our model, which then gives the predicted marks for SEE out of 100. This is a very simple Linear Regression model, with 2048 epochs for better accuracy of the predicted marks.

The Attendance Predictor uses simple math to give the number of classes the student needs to attend in order to maintain that target attendance percentage, the student has to specify the current attended classes, the current total classes, the target percentage and the approximate total number of classes. Using this data we find the number of classes you need to attend. And it also tells you if its feasible or not.

Most Importantly since this is a WebApp it is very easy to use and can be used in any device, the tensorflow library used is flexible and works architecture independent.

Ending your eligibility and marks anxiety here at CYNERGY Endgame 😉😉😉.

## Further Improvement

In the current development the app is standalone and does not store any data of the student, it can be improved by creating a portal for students, where they can visualize their scores, this will also give more data points for the ML Model, and a CNN can be used to give a more accurate marks prediction.

The app can then be integrated along with the current iPortal System to improve the student experience.

## Technologies or Languages Used

* Tensorflow.js
* Angular 7
* Bootstrap
* HTML
* CSS
* SCSS
* Git
* TypeScript
* JavaScript

## Instructions to use the project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploying to gh-pages

`ngh --dir ./dist/ProjektIodine --message="First Deploy" --branch=gh-pages --no-silent`
