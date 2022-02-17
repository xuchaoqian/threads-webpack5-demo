.PHONY : default install build pack start test clean

NPM=npm

default: start

install:
	${NPM} install

build:
	${NPM} run build

pack:
	${NPM} run pack

start:
	${NPM} run start

test:
	${NPM} run test

clean:
	${NPM} run-script clean
