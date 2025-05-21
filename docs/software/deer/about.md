---
id: about-deer
title: Data Entry & Exhibition for Rerum
custom_edit_url: null
---
<!-- A header image is optional; if used should be no greater than 200x600 -->
![Data Entry & Exhibition for Rerum header image](https://deer.rerum.io/images/deerlogo_banner.jpg)

## Overview

DEER is a framework for designers to quickly template web components for exhibition or data entry. By default, these components all follow the Rerum API, connect to the public sandbox instance of RERUM, and simplify descriptive annotation.

### Information

- **Source Code:** [https://github.com/CenterForDigitalHumanities/deer](https://github.com/CenterForDigitalHumanities/deer)
- **Client**: Research Computing Group, Saint Louis University
- **Current Tech Lead:** [Bryan Haberberger](https://github.com/theHabes)
- **Developers:**
  - Sophia Bahru (capstone) [<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg" width="25" height="25" />](https://github.com/sophiabahru)
  - Rob Helme (capstone) [<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg" width="25" height="25" />](https://github.com/Regorh)
  - Patrick Cuba (RCG staff) [<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg" width="25" height="25" />](https://github.com/cubap)
  - Bryan Haberberger (RCG staff) [<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg" width="25" height="25" />](https://github.com/theHabes) 
- **Start Date:** April 2019
- **Adoption Date:** August 2023
- **Technologies Used:** 
  - Web Components,
  - JavaScript,
  - HTML, CSS
- **Type:** Web
- **License:** none
- **Version:** 0.92

## User Guide

Instructions for use are available in the [project wiki](https://github.com/CenterForDigitalHumanities/deer/wiki/Using-DEER-in-your-project). 
Examples can be seen at https://deer.rerum.io.

## Technical Information

This framework is intended to be used by designers as web components which can be extended for needed customization without much knowledge beyond what is typically required by other templating or component libraries or systems. Any opportunity to adhere more tightly to standards or simplify the experience for designers is encouraged..

The choice to use as much plain JavaScript as possible is made to allow for the greatest flexibility in the future. It is not off the map to create ports into other languages or super-languages, but until we release 1.0, it is out of scope.

### Overview
 
The original design in the alpha releases is less bound to standards than the release candidate because the Web Component standard was not established yet and most of the air was taken up by new React flavors.

The framework splits concerns into two main camps: Forms and Views

#### Forms

Simple forms look familiar, but instead of saving an entire document, the fields are saved as annotations on the resource identified in the `<form>` element's `deer-id` attribute. An `$isDirty` property is used to tell when a value has been modified to honor the versioning requirements. Complex form fields can be created, but requires a little more fluency in the DEER events. A NoticeBoard class is used as a pubsubhub bus to allow for the notification of changes to the data rendered in the form.

#### Views

Views are very similar to the data-binding template systems though it does not have a bespoke syntax like Handlebars or Angular. In the exhibition use case, a view is a simple way to collect a document from the database with all the annotations that describe it. The `deer-template` element is usde in older versions and in hte 1.0 RC, the element itself is registered as a template.

In either case, a View is registered by `deer-id` attribute and standard Web Component lifecycle methods are used to render the resource.

### Development Priorities

- Release Candidate 1.0 with Web Components
- Simple template creation
- Improve handling of complex forms
- Tidy up events for customization
- Mirror some client-side functionality on RERUM

## Get Involved

<!-- A group photo is optional; if used should be no greater than 800x800 -->
<!--![Group Photo Alt Text](group.jpg) -->

Overview of contribution and participation information, and links to any [contributors guide](https://github.com/CenterForDigitalHumanities/deer/blob/main/CONTRIBUTING.md)
