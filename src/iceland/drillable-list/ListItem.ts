export interface ListItem<
  IdType extends string | number,
  ItemType,
  TypeString extends string = string,
> {
  id: IdType
  order?: number | null
  data?: ItemType | null
  children: ListItem<IdType, ItemType, TypeString>[] | null
  type: TypeString

  //convert to type and add hasChild?
}
