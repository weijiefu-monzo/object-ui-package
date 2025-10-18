import{u as p}from"./jsxRuntime.module-CxGcVytw.js";import{B as g}from"./index-BZRnsO7D.js";import{A as h,a as S}from"./index-BOlHJk3R.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./compat.module-D4i00Yst.js";import"./hooks.module-B72hWW-M.js";const y=()=>console.log("action fired"),D={title:"Components/Button",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},color:{control:{type:"select"},options:["primary","secondary"]},signal:{control:{type:"select"},options:["neutral","success","warning","error"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"}},args:{onClick:y}},r={args:{children:"Button"}},e={args:{color:"primary",children:"Primary Button"}},a={args:{color:"secondary",children:"Secondary Button"}},s={args:{size:"small",children:"Small Button"}},n={args:{size:"medium",children:"Medium Button"}},o={args:{size:"large",children:"Large Button"}},t={args:{children:"With Icon",startIcon:p(h,{})}},c={args:{children:"With Icon",endIcon:p(S,{})}},i={args:{children:"Full Width Button",fullWidth:!0},parameters:{layout:"padded"}},l={args:{children:"Success",signal:"success"}},d={args:{children:"Warning",signal:"warning"}},m={args:{children:"Error",signal:"error"}},u={args:{children:"Disabled",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    children: "Primary Button"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: "Secondary Button"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "Small Button"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    children: "Medium Button"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "Large Button"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "With Icon",
    startIcon: <AiOutlinePlus /> as ComponentChildren
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "With Icon",
    endIcon: <AiOutlineHeart /> as ComponentChildren
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Full Width Button",
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Success",
    signal: "success"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Warning",
    signal: "warning"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Error",
    signal: "error"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};const P=["Default","Primary","Secondary","Small","Medium","Large","WithStartIcon","WithEndIcon","FullWidth","Success","Warning","Error","Disabled"];export{r as Default,u as Disabled,m as Error,i as FullWidth,o as Large,n as Medium,e as Primary,a as Secondary,s as Small,l as Success,d as Warning,c as WithEndIcon,t as WithStartIcon,P as __namedExportsOrder,D as default};
