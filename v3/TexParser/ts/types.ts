/*************************************************************
 *
 *  Copyright (c) 2015-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview Basic type definitions.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

export type Args = boolean|number|string|null;

export type Attributes = Record<string, Args>;

export type Environment = Record<string, Args>;

export type ParseResult = {rest: string, item: Item};

// TODO: refine this type!
export type Item = any;
