import{u as e}from"./jsxRuntime.module-CxGcVytw.js";import"./compat.module-D4i00Yst.js";import{c as m}from"./clsx-B-dksMZM.js";import{I as u}from"./index-DicQkFMf.js";import{b as f}from"./index-BOlHJk3R.js";import{G as s}from"./index-ErjUo9zj.js";import{B as a}from"./index-BZRnsO7D.js";import{d as h}from"./hooks.module-B72hWW-M.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";const _="_modal_ft1we_1",C="_open_ft1we_17",g="_container_ft1we_22",O="_header_ft1we_38",y="_content_ft1we_47",B="_actions_ft1we_51",o={modal:_,open:C,container:g,header:O,content:y,actions:B},i=({children:r,title:l,isOpen:t,actions:d,onClose:p})=>e("div",{className:m(o.modal,t&&o.open),children:e("div",{className:o.container,children:[e("div",{className:o.header,children:[e("h2",{children:l}),e(u,{size:"small",onClick:p,children:e(f,{})})]}),e("div",{className:o.content,children:r}),e("div",{className:o.actions,children:e(s,{fullWidth:!0,children:d})})]})}),c=()=>console.log("action fired"),b={title:"Components/Modal",component:i,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},title:{control:"text"}},args:{onClose:c}},n={args:{title:"Default Modal"},render:r=>{const[l,t]=h(!1);return e("div",{style:{padding:"24px",height:"640px"},children:[e(a,{color:"primary",onClick:()=>t(!0),children:"Open Modal"}),e(i,{...r,isOpen:l,onClose:()=>t(!1),children:e("p",{children:"This is the content of the modal. You can put any component here."}),actions:e(s,{fullWidth:!0,children:[e(a,{fullWidth:!0,onClick:()=>t(!1),children:"Cancel"}),e(a,{fullWidth:!0,color:"primary",onClick:c,children:"Confirm"})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Default Modal'
  },
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: '24px',
      height: '640px'
    }}>
        <Button color="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} children={<p>This is the content of the modal. You can put any component here.</p>} actions={<Group fullWidth>
              <Button fullWidth onClick={() => setOpen(false)}>Cancel</Button>
              <Button fullWidth color="primary" onClick={fn}>Confirm</Button>
            </Group>} />
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,b as default};
