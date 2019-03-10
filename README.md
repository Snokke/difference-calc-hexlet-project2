# Difference calculator

[![Maintainability](https://api.codeclimate.com/v1/badges/32c94c55e8b989767dac/maintainability)](https://codeclimate.com/github/Snokke/difference-calc-hexlet-project2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/32c94c55e8b989767dac/test_coverage)](https://codeclimate.com/github/Snokke/difference-calc-hexlet-project2/test_coverage)
[![Build Status](https://travis-ci.org/Snokke/difference-calc-hexlet-project2.svg?branch=master)](https://travis-ci.org/Snokke/difference-calc-hexlet-project2)

## Install
```sh
npm install -g project2-snokke
```

## Description

```
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format: pretty, plain, json (default: "pretty")
  -h, --help           output usage information
```

Supported file formats: **json**, **yaml**, **ini**

Supported output formats: **pretty**, **flat**, **json**

## Demo

Pretty format ([Asciinema](https://asciinema.org/a/wGMDMUJGVqpTTeywxIXlpW7YM?speed=4)):
```
bash-3.2$ gendiff before.json after.json     
{                                                                                 
    common: {                                                                     
        setting1: Value 1                                                         
      - setting2: 200                                                             
      + setting3: {                                                               
            key: value                                                            
        }                                                                         
      - setting3: true                                                            
        setting6: {                                                               
            key: value                                                            
          + ops: vops                                                             
        }                                                                         
      + follow: false                                                             
      + setting4: blah blah                                                       
      + setting5: {                                                               
            key5: value5                                                          
        }                                                                         
    }                                                                             
    group1: {                                                                     
      + baz: bars                                                                 
      - baz: bas                                                                  
        foo: bar                                                                  
      + nest: str                                                                 
      - nest: {                                                                   
            key: value                                                            
        }                                                                         
    }                                                                             
  - group2: {                                                                     
        abc: 12345                                                                
    }                                                                             
  + group3: {                                                                     
        fee: 100500                                                               
    }                                                                             
}  
```

Flat format ([Asciinema](https://asciinema.org/a/BOJAFXoE62rT1XoC0fIqazVuj?speed=4)):
```
bash-3.2$ gendiff --format plain before.json after.json                           
Property 'common.setting2' was removed                                            
Property 'common.setting3' was updated. From true to [complex value]              
Property 'common.setting6.ops' was added with value: 'vops'                       
Property 'common.follow' was added with value: false                              
Property 'common.setting4' was added with value: 'blah blah'                      
Property 'common.setting5' was added with value: [complex value]                  
Property 'group1.baz' was updated. From 'bas' to 'bars'                           
Property 'group1.nest' was updated. From [complex value] to 'str'                 
Property 'group2' was removed                                                     
Property 'group3' was added with value: [complex value]              
```