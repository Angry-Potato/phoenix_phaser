use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or you later on).
config :phoenix_phaser, PhoenixPhaser.Endpoint,
  secret_key_base: System.get_env("SECRET_KEY_BASE")# "7yKKn1RLxQtdpRD2tLqQnYw/U0jwRehNM6+j+zEARxxUsoPsBMF2MMSDwBHjRm79"

#$ heroku config:set SECRET_KEY_BASE=[long.string.of.chars]
#$ heroku config:set SOME_VAR=[the.value]