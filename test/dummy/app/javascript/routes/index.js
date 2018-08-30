import { urlFor } from './utils'
export const rails_blob_representation = (...args) => urlFor("/rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format)", ["signed_blob_id","variation_key","filename","format"], {}, ...args)
export const rails_direct_uploads = (...args) => urlFor("/rails/active_storage/direct_uploads(.:format)", ["format"], {}, ...args)
export const rails_disk_service = (...args) => urlFor("/rails/active_storage/disk/:encoded_key/*filename(.:format)", ["encoded_key","filename","format"], {}, ...args)
export const rails_info = (...args) => urlFor("/rails/info(.:format)", ["format"], {}, ...args)
export const rails_info_properties = (...args) => urlFor("/rails/info/properties(.:format)", ["format"], {}, ...args)
export const rails_info_routes = (...args) => urlFor("/rails/info/routes(.:format)", ["format"], {}, ...args)
export const rails_mailers = (...args) => urlFor("/rails/mailers(.:format)", ["format"], {}, ...args)
export const rails_service_blob = (...args) => urlFor("/rails/active_storage/blobs/:signed_id/*filename(.:format)", ["signed_id","filename","format"], {}, ...args)
export const update_rails_disk_service = (...args) => urlFor("/rails/active_storage/disk/:encoded_token(.:format)", ["encoded_token","format"], {}, ...args)
