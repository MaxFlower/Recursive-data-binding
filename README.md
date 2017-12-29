# Relation between parent and children in Angular.

There are three recursive components.


```
<h1>Recursion with primitive.</h1>
<hr/>

<app-recursive [data] = "data"></app-recursive>

<hr>
<h1>Recursion with object.</h1>

<app-object-recurive [data] = "objectData"></app-object-recurive>

<hr>
<h1>Change detection.</h1>

<app-change-detection-recursive [data] = "detectionData"></app-change-detection-recursive>
```

Demo shows how work change detection, eventEmitter output.
Examples were implemented with primitives and objects. 

Try to use **Recursion demo** for understanding Angular data-binding.


## Development server

- Run **`npm install`**.

- Start server with **`ng serve`** command. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
