# -*- coding: utf-8 -*-
"""
Created on Mon Feb 17 21:25:39 2020

@author: etarmol
following PEP8
"""

from sklearn import svm
from sklearn import feature_extraction
import numpy as np
import json
import pandas as pd

class Model:

    #Constructor
    def __init__(self,foo):
        self.foo = foo
        self.emotions = ['very negative','negative','neutral','positive','very positive']
    ##METHODS##
    def read_json(self,path_to_file):
        #INPUT: path to json file
        #OUTPUT: dictionary-like data from json file
        with open(path_to_file) as dataBE:
            data =json.load(dataBE)
        return data
        #print(json.dumps(dataBE, sort_keys = True,indent = 4))

    def feature_extraction(self,data):
        #INPUT: data from Json file
        #OUTPUT: feature vector to be used by SVM
        #TODO: extract words + labels from json dict
        texts = ['Johnny had a litte lamb','ie ah ie ah oh','some more filler text I guess']
        vec = feature_extraction.text.CountVectorizer(binary=True)
        vec.fit(texts)
        #print([w for w in sorted(vec.vocabulary_.keys())])
        print(pd.DataFrame(vec.transform(texts).toarray(), columns=sorted(vec.vocabulary_.keys())))



    def SVM(self,features,kernel):
        #INPUT: extracted features from text / kernel to use for separation of data
        #OUTPUT: optimized parameters for
        #TODO: implement SVM
        clf = svm.SVC()

