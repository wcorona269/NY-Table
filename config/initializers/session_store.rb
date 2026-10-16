# Keep users signed in across browser restarts. Without expire_after the
# session cookie is a browser-session cookie and is dropped on quit.
Rails.application.config.session_store :cookie_store,
  key: '_my_table_session',
  expire_after: 30.days,
  secure: Rails.env.production?,
  same_site: :lax
