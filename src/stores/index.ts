// Init pinia & use custom persist storage plugin
const pinia = createPinia();
pinia.use(PersistStorage);

export default pinia;
