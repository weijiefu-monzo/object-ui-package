import{u as e}from"./jsxRuntime.module-CxGcVytw.js";import{c as v}from"./clsx-B-dksMZM.js";import{I as p}from"./index-DicQkFMf.js";import{c as m,a as f,d as C,e as A}from"./index-BOlHJk3R.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";import"./compat.module-D4i00Yst.js";import"./hooks.module-B72hWW-M.js";const O="_listItem_ek0i7_1",z="_clickable_ek0i7_11",S="_action_ek0i7_15",L="_avatar_ek0i7_21",T="_content_ek0i7_34",B="_label_ek0i7_42",D="_description_ek0i7_49",N="_outlined_ek0i7_66",a={listItem:O,clickable:z,action:S,avatar:L,content:T,label:B,description:D,outlined:N},i=({avatar:t,label:u,description:g,action:h,onClick:k,outlined:I=!1})=>{const b=_=>{_.stopPropagation()};return e("li",{className:v(a.listItem,k&&a.clickable,I&&a.outlined),onClick:k,children:[t&&e("div",{className:a.avatar,children:t}),e("div",{className:a.content,children:[u&&e("div",{className:a.label,children:u}),g&&e("div",{className:a.description,children:g})]}),h&&e("div",{className:a.action,onClick:b,children:h})]})},d=()=>console.log("action fired"),w={title:"Components/ListItem",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{outlined:{control:"boolean"}}},r={args:{label:"List Item",description:"This is a description for the list item"}},s={args:{label:"John Doe",description:"Software Engineer"},render:t=>e(i,{...t,avatar:e(m,{size:20})})},o={args:{label:"Favorite Item",description:"Click the heart to favorite this item"},render:t=>e(i,{...t,action:e(p,{size:"small",onClick:d,children:e(f,{})})})},n={args:{label:"Jane Smith",description:"Product Manager at Tech Corp"},render:t=>e(i,{...t,avatar:e(m,{size:20}),action:e(p,{size:"small",onClick:d,children:e(C,{})})})},c={args:{label:"Clickable Item",description:"This entire item is clickable",onClick:d},render:t=>e(i,{...t,avatar:e(m,{size:20})})},l={args:{outlined:!0,label:"Outlined Item",description:"This item has an outline"},render:t=>e(i,{...t,avatar:e(m,{size:20}),action:e(p,{size:"small",onClick:d,children:e(A,{})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'List Item',
    description: 'This is a description for the list item'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    description: 'Software Engineer'
  },
  render: args => <ListItem {...args} avatar={<AiOutlineUser size={20} />} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Item',
    description: 'Click the heart to favorite this item'
  },
  render: args => <ListItem {...args} action={<IconButton size="small" onClick={fn}>
          <AiOutlineHeart />
        </IconButton>} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Jane Smith',
    description: 'Product Manager at Tech Corp'
  },
  render: args => <ListItem {...args} avatar={<AiOutlineUser size={20} />} action={<IconButton size="small" onClick={fn}>
          <AiOutlineMore />
        </IconButton>} />
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Item',
    description: 'This entire item is clickable',
    onClick: fn
  },
  render: args => <ListItem {...args} avatar={<AiOutlineUser size={20} />} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    outlined: true,
    label: 'Outlined Item',
    description: 'This item has an outline'
  },
  render: args => <ListItem {...args} avatar={<AiOutlineUser size={20} />} action={<IconButton size="small" onClick={fn}>
          <AiOutlineDelete />
        </IconButton>} />
}`,...l.parameters?.docs?.source}}};const F=["Default","WithAvatar","WithAction","ComplexItem","Clickable","Outlined"];export{c as Clickable,n as ComplexItem,r as Default,l as Outlined,o as WithAction,s as WithAvatar,F as __namedExportsOrder,w as default};
