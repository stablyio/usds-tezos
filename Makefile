##########
# NOTICE #
##########
# Only supporting MacOS in this version

MAKE_TOKEN = $(MAKE) -C token/
MAKE_CLI = $(MAKE) -C cli/

tezos-client:
	brew tap serokell/tezos-packaging https://github.com/serokell/tezos-packaging.git
	brew install tezos-client

token: tezos-client
	$(MAKE_TOKEN) all

cli:
	$(MAKE_CLI) all
