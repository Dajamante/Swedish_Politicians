# -*- coding: utf-8 -*-
"""
Created on Mon Feb 17 22:54:31 2020

@author: etarmol

TESTING CLASS
"""
from model import Model

def main():
    test = Model(0)
    # Markus C:/data_MVK/H7091-1.json
    path_to_file = "/Users/aissata/mySkolfiler2/mvk/python/H7091-1.json"
    test.read_json(path_to_file)
    test.feature_extraction(1)

if __name__ == '__main__':
    main()