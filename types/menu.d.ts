declare interface MenuItem {
  text: string;
  link: string;
  icon: any;
  show?: Ref<boolean>;
  menu?: Array<MenuItem>;
}
