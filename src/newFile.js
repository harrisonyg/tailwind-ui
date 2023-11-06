export default (await import('vue')).defineComponent({
components: {
RedComponent,
YellowComponent,
data() {
return {
myObject: {
name: 'John Doe',
age: 30,
},
};
},
},
});
