import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import c652 from '../../data/noteBase/652.js';
// import c4 from '../../data/noteBase/4';
//
//
//
//
//
//
import c12 from '../../data/noteBase/12';
import c11 from '../../data/noteBase/11';
import c8 from '../../data/noteBase/8';
import c9 from '../../data/noteBase/9';
import c13 from '../../data/noteBase/13';
import c10 from '../../data/noteBase/10';
import c7 from '../../data/noteBase/7';
import c5 from '../../data/noteBase/5';
import c2 from '../../data/noteBase/2';
import c3 from '../../data/noteBase/3';
import c6 from '../../data/noteBase/6';
import c222 from '../../data/noteBase/222';
import c4982 from '../../data/noteBase/4982';
import c3071 from '../../data/noteBase/3071';
import c5580 from '../../data/noteBase/5580';
import c657 from '../../data/noteBase/657';
import c1739 from '../../data/noteBase/1739';
import c4483 from '../../data/noteBase/4483';
import c1 from '../../data/noteBase/1';
const returnData = async catId => {
  //const data = {};

  if (catId === 1) {
    this.data = await c1;
  }
  if (catId === 2) {
    this.data = await c2;
  }
  if (catId === 3) {
    this.data = await c3;
  }
  // if (catId === 4) {
  //   this.data = await c4;
  // }
  if (catId === 5) {
    this.data = await c5;
  }
  if (catId === 6) {
    this.data = await c6;
  }
  if (catId === 7) {
    this.data = await c7;
  }
  if (catId === 8) {
    this.data = await c8;
  }
  if (catId === 9) {
    this.data = await c9;
  }
  if (catId === 10) {
    this.data = await c10;
  }
  if (catId === 11) {
    this.data = await c11;
  }
  if (catId === 12) {
    this.data = await c12;
  }
  if (catId === 13) {
    this.data = await c13;
  }
  if (catId === 657) {
    this.data = await c657;
  }

  if (catId === 1739) {
    this.data = await c1739;
  }
  if (catId === 4982) {
    this.data = await c4982;
  }
  if (catId === 222) {
    this.data = await c222;
  }
  if (catId === 3071) {
    this.data = await c3071;
  }
  if (catId === 4483) {
    this.data = await c4483;
  }
  // if (catId === 652) {
  //   this.data = await c652;
  // }
  if (catId === 5580) {
    this.data = await c5580;
  }

  return this.data;
};

export default returnData;
