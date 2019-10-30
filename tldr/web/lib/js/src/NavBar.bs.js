// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Row$ReactTemplate = require("./Row.bs.js");
var Title$ReactTemplate = require("./Title.bs.js");
var Spacer$ReactTemplate = require("./Spacer.bs.js");
var SearchInput$ReactTemplate = require("./SearchInput.bs.js");

var component = ReasonReact.statelessComponent("Title");

function make(feedbackState, commandName, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return ReasonReact.element(undefined, undefined, Row$ReactTemplate.make(/* Left_to_right */1066667312, undefined, /* array */[
                              ReasonReact.element(undefined, undefined, Title$ReactTemplate.make(/* array */[])),
                              ReasonReact.element(undefined, undefined, Spacer$ReactTemplate.make(/* XL */19700, /* array */[])),
                              ReasonReact.element(undefined, undefined, SearchInput$ReactTemplate.make(feedbackState, "command name", commandName, /* array */[]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var Style = 0;

exports.Style = Style;
exports.component = component;
exports.make = make;
/* component Not a pure module */