# Angular ecosystem

## Generate WS-UI

```bash
ng new ws-ui --no-create-application
cd ws-ui
ng g lib lab-ui --prefix=lab-ui
ng config projects.lab-ui.schematics.@schematics/angular:component.changeDetection "OnPush"
ng config projects.lab-ui.schematics.@schematics/angular:component.flat true
ng config projects.lab-ui.schematics.@schematics/angular:component.inlineTemplate true
ng config projects.lab-ui.schematics.@schematics/angular:component.inlineStyle false
ng config projects.lab-ui.schematics.@schematics/angular:component.style "none"
ng g c location
ng g c date
```

### Development and testing

```bash
# "watch": "ng build lab-ui --watch --configuration development",
npm run watch
# "start": "ng serve lab-ui-host",
npm start
# "test": "ng test lab-ui"
npm test
```

### Build and publish

```bash
npm i -D standard-version
# "prerelease": "standard-version ",
# "release": "git push --follow-tags origin main",
# "publish": "npm run build && npm run release && cd dist/lab-ui && npm link",
npm run publish
# list global npm links
npm ls -g --depth=0
```

## Generate WS-Srv

```bash
ng new ws-srv --no-create-application
cd ws-srv
ng g lib lab-srv
ng g s logger
ng g s crud-repository
# provided in platform
ng g s auth-store
ng g s platform-store
```

### Development and testing

```bash
# "watch": "ng build lab-srv --watch --configuration development",
npm run watch
# "test": "ng test lab-srv"
npm test
```

### Build and publish

```bash
# "publish": "npm run build && cd dist/lab-srv && npm link",
npm run publish
# list global npm links
npm ls -g --depth=0
# import { LogLevel, LoggerService } from 'lab-srv';
# build.options: preserveSymlinks: true
```

## Generate WS-Core

```bash
ng new ws-core --no-create-application
cd ws-core
ng g lib lab-core --prefix=lab-core
ng g interceptor metrics
ng g class error-service
```

### Development and testing

```bash
# "watch": "ng build lab-core --watch --configuration development",
npm run watch
# "test": "ng test lab-core"
npm test
```

### Build and publish

```bash
# "publish": "npm run build && cd dist/lab-core && npm link",
npm run publish
# list global npm links
npm ls -g --depth=0
```

## Generate the application

```bash
ng new lab-target --minimal
```

### Consume (link) the library

```bash
# target the global npm link
cd lab-target
npm link lab-ui
npm link lab-srv
npm link lab-core
# build.options: preserveSymlinks: true
npm start
```

```js
 "cli": {
    "analytics": false,
    "cache": {
      "enabled": false
    }
  }
```

# Standard Non Angular ecosystem

## Generate WS-wbc

```bash
cd ws-ui
ng g app lab-wbc --prefix=lab-wbc --minimal --routing=false
npm install @angular/elements --save
ng config projects.lab-wbc.architect.build.configurations.production.outputHashing "none"
ng config projects.lab-wbc.schematics.@schematics/angular:component.changeDetection "OnPush"
ng config projects.lab-wbc.schematics.@schematics/angular:component.flat true
ng config projects.lab-wbc.schematics.@schematics/angular:component.inlineTemplate true
ng config projects.lab-wbc.schematics.@schematics/angular:component.inlineStyle false
ng config projects.lab-wbc.schematics.@schematics/angular:component.skipSelector true
ng config projects.lab-wbc.schematics.@schematics/angular:component.skipTests true
ng config projects.lab-wbc.schematics.@schematics/angular:component.style "none"
ng g c location --type=element --project=lab-wbc
ng g c date --type=element --project=lab-wbc
```

```json
{
  "name": "@lab/wbc",
  "description": "Web Component for Lab",
  "version": "0.0.1",
  "main": "bundle.js"
}
```

### Development and testing

```bash
# "watch": "ng build lab-elements --watch --configuration development",
npm run watch
# "test": "ng test lab-elements"
npm test
```

### Build and publish

```bash
# "publish": "npm run build && cd dist/lab-elements && npm link",
npm run publish
# list global npm links
npm ls -g --depth=0
```

## Generate WS-domain

```bash
ng new ws-domain --no-create-application
cd ws-domain
ng g lib lab-domain --prefix=lab-domain
ng g class user
ng g class item
```

## Generate WS-Global

```bash
ng new ws-global --no-create-application
cd ws-global
ng g lib lab-global
ng g class pub-sub-service
ng g class global-store
```

### Development and testing

```bash
# "watch": "ng build lab-global --watch --configuration development",
npm run watch
# "test": "ng test lab-global"
npm test
```

### Build and publish

```bash
# "publish": "npm run build && cd dist/lab-global && npm link",
npm run publish
# list global npm links
npm ls -g --depth=0
```

```bash
# lab target environment
ng g environments
```

npm create vite

<!-- cd lab-target
npm i @angular-architects/native-federation -D
ng g @angular-architects/native-federation:init --project lab-target --port 4201 --type remote -->

ng new lab-host -S -s -t --style=css --ssr=false
cd lab-host
npm i @angular-architects/native-federation -D
ng g @angular-architects/native-federation:init --project lab-host --port 4200 --type dynamic-host
