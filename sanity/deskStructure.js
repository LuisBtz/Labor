import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'

// default implementation by re-exporting
export const getDefaultDocumentNode = Structure.getDefaultDocumentNode
// export default Structure.default

// or manual implementation to use with your own custom desk structure
// export const getDefaultDocumentNode = (props) => {
//   if (props.schemaType === 'myschema') {
//     return S.document().views(
//       Structure.getDocumentNodeViewsForSchemaType(props.schemaType)
//     )
//   }
//   return S.document()
// }

export default () => {
  const items = Structure.getFilteredDocumentTypeListItems()
  return S.list()
    .id('__root__')
    .title('Labor Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(() => `⚙️`)
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(() => `📝`)
                .child(
                  S.document().schemaType('metadata').documentId('metadata')
                ),
              S.listItem()
                .title('Header')
                .icon(() => `👆🏻`)
                .child(S.document().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .icon(() => `👇🏻`)
                .child(S.document().schemaType('footer').documentId('footer')),
            ])
          //   S.document().schemaType('siteSettings').documentId('siteSetting')
        ),
      S.divider(),
      ...items.filter(
        (item) => !['metadata', 'header', 'footer'].includes(item.getId())
      ),
    ])
}
